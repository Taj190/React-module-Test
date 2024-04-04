import './App.css'
import Display from './component/display'
import GenreFilter from './component/GenreFilter';
import genres from './component/genres';
function App() {

  return(
   <div className='root'>
     <h1>
    Top 15 movies of all the time</h1>
    <GenreFilter genres={genres} />
    <Display/>
   </div>
   /* git remote add origin https://github.com/Taj190/React-module-Test.git */
  )
 
}

export default App
