export const quizeData = async () => {

     const quizData = await fetch('https://openapi.programming-hero.com/api/quiz');
     const quizes = await quizData.json();
     const quiz = quizes.data;

     return  quiz ; 
}

 