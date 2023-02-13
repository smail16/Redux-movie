import { ADD, DELETE, EDIT, FILTER } from "./actionTypes";



const init ={ moviedata : [
    {
      id:Math.random(),
      posteurl:"/sw.jpg",
      title:"Star wars",
      rate: "5",
      date: "December 2019",
      trailer:"https://www.youtube.com/embed/sGbxmsDFVnE",
      description:"The film was announced after The Walt Disney Company's acquisition of Lucasfilm in October 2012. The film is the first Star Wars film to not extensively involve franchise creator George Lucas, who only served as a creative consultant in the early stages of production",
  
    },
    {
      id:Math.random(),
      posteurl:"/av.jpg",
      title:"Avengers",
      rate: "4",
      date: "April 2018",
      trailer:"https://www.youtube.com/embed/hA6hldpSTF8",
      description:"Les Avengers étaient une équipe d'individus extraordinaires, dotés de super-pouvoirs ou de caractéristiques particulières. Le but de l'équipe était de protéger la stabilité mondiale contre les menaces intérieures ou extraterrestres",
  
    },
    {
      id:Math.random(),
      posteurl:"/fr.jpg",
      title:"Frozen",
      rate: 3,
      date: "November 2019",
      trailer:"https://www.youtube.com/embed/TbQm5doF_Uc",
      description:"Anna, une jeune fille aussi audacieuse qu'optimiste, se lance dans un incroyable voyage en compagnie de Kristoff, un montagnard expérimenté, et de son fidèle renne Sven, à la recherche de sa soeur, Elsa, la reine des neiges qui a plongé le royaume d'Arendelle dans un hiver éternel.",
  
    },
    {
      id:Math.random(),
      posteurl:"/fan.jpg",
      title:"Fantastic beasts",
      rate: "3",
      date: " March 2020",
      trailer:"https://www.youtube.com/embed/D1kH4OMIOMc",
      description:"Fantastic Beasts, a fictional novel by J.K. Rowling, follows a magical young man named Newt on a journey to find his beasts that escaped. Newt Scamander is a wizard unlike any other, he uses not only his powers but the powers of his magical animals.",
  
    },
  ]
};

const reducer=(state= init, {type, payload})=>{
    switch (type) {
        case DELETE:
            
           return{...state,moviedata:state.moviedata.filter((el)=> el.id!==payload)}
         
        case ADD:
            return{...state,moviedata:[...state.moviedata, payload]}
              
        case FILTER:
            return{

            }    
        case EDIT:
            return{...state,moviedata: state.moviedata.map(el=>(el.id===payload.id? payload:el))

            }    
    
        default:
            return state
    }
    
}
export default reducer;