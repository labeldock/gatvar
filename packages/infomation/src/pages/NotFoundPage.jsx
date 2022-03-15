import React from "react"
import { Link } from "react-router-dom"

export default function NotFoundPage (){
  return (
    <React.Fragment>
      <div>404 Not found</div>
      <div>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    </React.Fragment>
  )
}