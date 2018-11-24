import posed from 'react-pose';

export default posed.div({
  enter: { opacity: 1, y: 0, transition: { duration: 700 } },
  exit: { opacity: 0, y: 200, transition: { duration: 700 } },
  'pre-enter': { opacity: 0, y: -200, transition: { duration: 700 } }
});
