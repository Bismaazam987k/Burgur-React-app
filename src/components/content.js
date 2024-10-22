import React, {useState} from 'react'
 function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    Lettuce:0,
    Bacon:0,
    Cheese: 0,
    Meat: 0,
  });
  const addIngredient = (type) => {
    console.log('hello');
    
    setIngredients((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };


  const removeIngredient = (type) => {
    console.log('add');
    setIngredients((prev) => ({
      ...prev,
      [type]: prev[type] - 1,
    }));
  };
 return (
  <>
     <div class=" bg-white h-[490px] w-[1508px] relative ">

   <div className='absolute'>
   <div class="w-[400px] h-24 bg-amber-700 mt-[120px] ml-[540px] rounded-t-full shadow-md relative">
        <div className='bg-white w-3 h-8 skew-x-12 ml-[80px] absolute mt-5 rounded-full'></div>
        <div className='bg-white w-3 h-8 rotate-90 ml-[150px] absolute mt-8 rounded-full'></div>
        <div className='bg-white w-3 h-8 rotate-45 ml-[200px] absolute mt-12 rounded-full'></div>
        <div className='bg-white w-3 h-8 -rotate-45 ml-[250px] absolute mt-8 rounded-full'></div>
        <div className='bg-white w-3 h-8 rotate-12 ml-[300px] absolute mt-10 rounded-full'></div>
    </div>
  
    <div className="flex flex-col items-center relative mt-2 mb-2">

        {Array(ingredients.Lettuce)
          .fill()
          .map((_, i) => (
            <div
              key={`Lettuce-${i}`}
              className="w-[400px] h-8 ml-[540px] bg-green-600 rounded-lg mb-1"
            ></div>
          ))}

        {Array(ingredients.Bacon)
          .fill()
          .map((_, i) => (
            <div
              key={`Bacon-${i}`}
              className="w-[400px] h-3 ml-[540px] bg-red-600 rounded-lg mb-1"
            ></div>
          ))}

{Array(ingredients.Cheeze)
          .fill()
          .map((_, i) => (
            <div
              key={`Cheeze-${i}`}
              className="w-[410px] ml-[540px] h-4 bg-yellow-400 rounded-lg mb-1"
            ></div>
          ))}

{Array(ingredients.Meat)
          .fill()
          .map((_, i) => (
            <div
              key={`Meat-${i}`}
              className="w-[410px] ml-[540px] h-9 bg-amber-800 rounded-3xl"
            ></div>
          ))}
      </div>
    {/* <div class=" mt-[20px] ml-[600px] absolute font-bold text-2xl "><h2>No Ingredients Added</h2></div> */}
    <div class="w-[400px] h-16 bg-amber-700 mt-[1px] ml-[540px] rounded-b-full shadow-md absolute"></div>
   </div>
</div>
    

    <div class=" bg-amber-300 h-[450px] w-[1509px]">
    <h3 className='text-2xl text-center pt-10'> Current price:<b> $300</b></h3>
    <div class='flex justify-center mt-10'>
        <h4 class='font-bold text-xl text-center mt-2 mr-14 '>Lettuce</h4>
       <div class='text-center '>
         <button class='bg-gray-400 text-white text-xl text-center px-8 py-2 hover:cursor-not-allowed mr-8' onClick={() => removeIngredient('Lettuce')}>Less</button>
         <button class='bg-amber-600 text-white text-xl text-center px-8 py-2 hover:cursor-pointer' onClick={() => addIngredient('Lettuce')}>More</button>
         </div>   
    </div>

    <div class='flex justify-center mt-4'>
        <h4 class='font-bold text-xl text-center mt-2 mr-16 '>Bacon</h4>
       <div class='text-center '>
         <button class='bg-gray-400 text-white text-xl text-center px-8 py-2 hover:cursor-not-allowed mr-8' onClick={() => removeIngredient('Bacon')}>Less</button>
         <button class='bg-amber-600 text-white text-xl text-center px-8 py-2 hover:cursor-pointer' onClick={() => addIngredient('Bacon')}>More</button>
         </div>   
    </div>

    <div class='flex justify-center mt-4'>
        <h4 class='font-bold text-xl text-center mt-2 mr-14 '>Cheeze</h4>
       <div class='text-center '>
         <button class='bg-gray-400 text-white text-xl text-center px-8 py-2 hover:cursor-not-allowed mr-8' onClick={() => removeIngredient('Cheeze')}>Less</button>
         <button class='bg-amber-600 text-white text-xl text-center px-8 py-2 hover:cursor-pointer' onClick={() => addIngredient('Cheeze')}>More</button>
         </div>   
    </div>

    <div class='flex justify-center mt-4'>
        <h4 class='font-bold text-xl text-center mt-2 mr-[70px] '>Meat</h4>
       <div class='text-center '>
         <button class='bg-gray-400 text-white text-xl text-center px-8 py-2 hover:cursor-not-allowed mr-8' onClick={() => removeIngredient('Meat')}>Less</button>
         <button class='bg-amber-600 text-white text-xl text-center px-8 py-2 hover:cursor-pointer' onClick={() => addIngredient('Meat')}>More</button>
         </div>   
    </div>
    <button class='bg-gray-400 text-white text-2xl ml-[650px] px-4 py-4 hover:cursor-not-allowed mt-10 '>SIGN UP TO ORDER</button>
</div>
</>
  );
}
export default BurgerBuilder;

