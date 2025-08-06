import './style.css'
import type{ OnenewsType } from '../../types/mainPage'
    const Onenews = (props:OnenewsType) =>{


        return (
        <>
            <div className="card">
                <p className="card-title">
                    {props.isImportant ? (
                        <strong>{props.title}</strong>
                    ) : (
                        props.title
                    )}
                 </p>

                <a href={props.link}  className="small-desc">
                  Переглянути
                </a>
                <p className="card-time">
                    {props.time}
                </p>
            </div>

        </>
        )
    }


        export default Onenews