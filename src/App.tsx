import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Couple from "./components/couple";
import Welcome from "./components/welcome-area";
import "./App.css";
import "./css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Saveday from "./components/countdown";

import People from "./components/people";

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <Saveday />
        <Couple />
        {/*<Story />*/}
        {/*<Gallery />*/}
        <People />
        <Welcome/>
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;
