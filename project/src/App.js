import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import Home from './components/home/home';
import Home1 from './components/home/home1';
import Home2 from './components/home/home2';
import About from './components/about/about';
import About1 from './components/about/about1.js';
import SignOut from './components/signout/signout';
import { ForgotPassword } from './components/forgotpassword/forgotpassword';
import Contact from './components/contact/contact';
import CalorieCalculator from './components/calculator/CalorieCalculator';
import HydrationCalculator from './components/calculator/HydrationCalculator';
import MacronutrientCalculator from './components/calculator/MacronutrientCalculator';
import NutritionInfoPage from './components/Nutrition/NutritionInfoPage';
//import HomePage from './components/addmeal/MealPlanningApp.js';
// import ResultPage from './components/result/result.js';
import { Menu } from '@chakra-ui/react';

import RecipePage from './components/recipies/recipies.js';
import NutritionPage from './components/homenutrition/homenutrition.js';

import LongJumpPage from './components/athletes/longjump.js';
import RunnerPage from './components/athletes/runner.js';
import SwimmerPage from './components/athletes/swimmer.js';
import WrestlerPage from './components/athletes/wrestler.js';
import WeightlifterPage from './components/athletes/weightlifter.js';
import JavelinPage from './components/athletes/javelin.js';
import PolevaultPage from './components/athletes/polevault.js';
import CyclistPage from './components/athletes/cyclist.js';
import ArcheryPage from './components/athletes/archery.js';
import HurdlePage from './components/athletes/hurdling.js';
import MarathonPage from './components/athletes/marathon.js';
import PaymentPage from './components/stores/checkout.js';

import ProductPage from './components/stores/productpage.js';
import MealPlanning from './components/meal/mealplanning.js';
//import Navbar from './'


function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/about1" element={<About1/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/CalorieCalculator" element={<CalorieCalculator/>}/>
        <Route path="/HydrationCalculator" element={<HydrationCalculator/>}/>
        <Route path="/MacronutritionCalculator" element={<MacronutrientCalculator/>}/>
        <Route path="/nutrition" element={<NutritionInfoPage/>}/>
        <Route path="/about" element={<Menu/>}/>
        <Route path="/forgotpass" element={<ForgotPassword />} />
         {/* <Route path="/addmeal" element={<HomePage/>}/> */}
        {/* <Route path="/result" element={<ResultPage/>}/> */}
        <Route path="/recipe" element={< RecipePage/>}/>
        <Route path="/homonutri" element={< NutritionPage/>}/>
        <Route path="/homomeal" element={< MealPlanning/>}/> 
        <Route path="/longjump" element={<LongJumpPage/>}/>
        <Route path="/runner" element={<RunnerPage/>}/>
        <Route path="/swimmer" element={<SwimmerPage/>}/>
        <Route path="/wrestler" element={<WrestlerPage/>}/>
        <Route path="/weightlifter" element={<WeightlifterPage/>}/>
        <Route path="/hurdling" element={<HurdlePage/>}/>
        <Route path="/javelin" element={<JavelinPage/>}/>
        <Route path="/marathon" element={<MarathonPage/>}/>
        <Route path="/polevault" element={<PolevaultPage/>}/>
        <Route path="/cyclist" element={<CyclistPage/>}/>
        <Route path="/archery" element={<ArcheryPage/>}/>
        <Route path="/home2" element={<Home2/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/checkout" element={<PaymentPage/>}/>


</Routes>
  </Router>
    
    
    </div>

    
    </>
  );
}

export default App;
