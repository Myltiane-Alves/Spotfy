import React from 'react'
import { Favorite } from '../Utils/icons/Favorite'

export default function Player() {
  return (
    <div>
        <div>
            <img  alt="album"/>
            <div>
                <strong>Somewhere In Time Var.2</strong>
                <span>Jackson Love</span>
            </div>
            <Favorite />
        </div>
        <div className="controls"></div>
        <div className="optionsControl" ></div>
    </div>
  )
}
