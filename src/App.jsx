import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import { useState, useEffect } from 'react';

function App() {
  const [points, setPoints] = useState(() => {
    const savedPoints = window.localStorage.getItem('saved-points');
    if (savedPoints !== null) {
      return JSON.parse(savedPoints);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-points', JSON.stringify(points));
  }, [points]);

  const updateFeedback = feedbackType => {
    setPoints(prev => {
      return { ...prev, [feedbackType]: prev[feedbackType] + 1 };
    });
  };

  const handleReset = () => {
    setPoints({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = () => {
    return Object.values(points).reduce((acc, item) => {
      return acc + item;
    }, 0);
  };
  const total = totalFeedback();

  const positiveFeedback = () => {
    const goodCount = points.good;
    if (total === 0) {
      return 0;
    }
    return Math.round((goodCount / total) * 100);
  };
  const positive = positiveFeedback();

  return (
    <>
      <Description />
      <Options
        points={points}
        onUpdate={updateFeedback}
        onReset={handleReset}
        total={total}
      />
      {total > 0 ? (
        <Feedback
          positive={positive}
          total={total}
          statistics={Object.entries(points)}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
