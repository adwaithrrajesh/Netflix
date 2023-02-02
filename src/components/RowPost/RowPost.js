import React,{useEffect,useState} from 'react';
import './RowPost.css'
import axios from '../../axios';
import { API_KEY, ImageUrl } from '../../constants/constants';
import YouTube from 'react-youtube';


const RowPost = (props) => {
    const [movies,setMovies] = useState([])
    const [UrlId,setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((Response)=>{
            setMovies(Response.data.results)
        })
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {   
          autoplay: 1,
        },
      };

      const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((Response)=>{
            if(Response.data.results.length!==0){
                setUrlId(Response.data.results[0])
            }else{
                alert('Trailer not Available')
            }
        })
      }

    return (
        <div>
            <h2 className='row'>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${ImageUrl+obj.backdrop_path}`} alt="poster" />
                    )
                }
            </div>
            {UrlId && <YouTube videoId={UrlId.key} opts={opts} />}
            
        </div>
    );
}

export default RowPost;
