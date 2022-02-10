import {NativeModules} from 'react-native';
import Reactotron, {asyncStorage, networking} from 'reactotron-react-native';

const scriptURL = NativeModules.SourceCode.scriptURL;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];
Reactotron.configure({host: scriptHostname})
  .use(asyncStorage())
  .use(networking())
  .connect();

this.console.log = Reactotron.log;
// this.console.error = Reactotron.error;
// this.console.warn = Reactotron.warn;
