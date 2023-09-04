import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, {useState} from 'react';
// import MyHeader from './component/MyHeader';
// import Home from './component/Home';
import AllBox,  {loader as eventLodar}from './component/AllBox';
import NavBar from './component/NavBar';
import Register,{action as newEveent} from './component/Register';
import Prodductdetail from './component/ProductDetail';
import ErrorPage from './component/ErrorPage';
import Page,{loader as pageLodar}from './component/Page';

import Login,{action as loginEvent}  from './component/Login';

// import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/box2_image.jpg';


import stateImage from './assets/box3_image.jpg';
import eventsImage from './assets/box4.jpg';
// import PhotoContainer from './component/PhotoContainer';
// import NewForm from './component/NewForm';




const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },

  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },

  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },

  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
];

function App(props) {


// const [alldata, setdata]  =useState(concepts)


// const dataHandler =(data)=>{

//   setdata((previousdata)=>{
//     return  [data,  ...previousdata];
//   }

//   );

//     console.log(data);



// }

const router = createBrowserRouter([
  {path:'/',
  element:<NavBar/>,
  // errorElement:<ErrorPage/>,

  
  children:[

    {path:'/', element:<AllBox  />,  loader:eventLodar,},

      

//       console.log(response);

//       if(!response.ok){
// //somthing
// console.log("this is not ok")
//       }
//       else{
//         const resdata= await response.json();
//         console.log("res data");
//         console.log(resdata['books']);
//         return resdata['books'];

//       }
//     },},
    {path:'/register', element:<Register/>, action:newEveent },
    {path: '/:id', element:<Prodductdetail/>},
    {path: '/page', element: <Page />, loader:pageLodar,},
    
    {path: '/login', element: <Login />,  action:loginEvent }
  ]
}
 
]);



  return (
    <div>
      {/* <MyHeader />
      <Home  />
      <AllBox  items={concepts} /> */}
      <RouterProvider router=  {router} />
    </div>
  );
}

export default App;
