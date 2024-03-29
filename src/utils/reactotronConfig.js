import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotronConfig = Reactotron
  .configure({ name: 'Youtube app' })
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

export default reactotronConfig;