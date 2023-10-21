import CategoryItem from '../../components/category-item/category-item.js';
import Navigation from '../../components/navigation/Navigation.js';
import { Fragment } from 'react';
import { Outlet } from 'react-router';
const categories =
    [
   {
     "id": 1,
     "title": "hats",
     "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJGr1e3ekudLKMhfyd2J19cFPL4MFFVypPV59cHB5F1V7TOUYyYWP9ph4OmPc97Xtd1s&usqp=CAU"
   },
   {
     "id": 2,
     "title": "jackets",
     "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCyw_9JAU8esX--LTZYy3L9LAqLFQVAnYWNu9jBrstmLO4-VSLrUHvuPCGWawi6VvUBY&usqp=CAU"
   },
   {
     "id": 3,
     "title": "sneakers",
     "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEt5_wWPhcF7cg6ki64aNPZJWeE3h1WhqpDg&usqp=CAU"
   },
   {
     "id": 4,
     "title": "womens",
     "imageUrl": "https://www.shutterstock.com/image-photo/watch-ring-suit-man-formal-260nw-1494395642.jpg"
   },
   {
     "id": 5,
     "title": "mens",
     "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuWnM3dI5A84I9qrmehktzDXKsaIQsgxc_g&usqp=CAU"
   }
 ]
const Home = () => {
    return (
         <Fragment>
            <div className="categories-container">
        {categories.map(({title,id,imageUrl}) => {
          return  (
          <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
          )
        })}
    </div>
         </Fragment>
    );
}

export default Home;
