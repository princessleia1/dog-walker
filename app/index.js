import { Application } from "./lib/view";
import { ViewEnd } from "./views/end";
import { ViewExercise } from "./views/exercise";
import { ViewSelect } from "./views/select";
import { ViewTips } from "./views/tips";  // New view

class MultiScreenApp extends Application {
  screens = { ViewSelect, ViewExercise, ViewTips, ViewEnd };
}

MultiScreenApp.start("ViewSelect");
