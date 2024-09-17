import {
  FluentProvider,
  webLightTheme,
  Card,
  CardHeader,
  CardFooter,
  Button,
} from '@fluentui/react-components';
import { WithPanels } from './example';

const App = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Card appearance={'outline'} orientation={'vertical'}>
        <WithPanels />

        <CardFooter>
          <div classname={'svyio'}>
            <Button key={'true'}>Ок</Button>
            <Button key="false" appearance={'subtle'} type={'cancel'}>
              Не ок
            </Button>
          </div>
        </CardFooter>
      </Card>
    </FluentProvider>
  );
};

export default App;
