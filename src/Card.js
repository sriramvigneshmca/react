import React from 'react';
const Card =(props)=>
{
	return(
		<div className="bg-blue dib br4 pa3 ma3 grow bw2  shadow-9 tc">
		<img src={`https://robohash.org/${props.id}?size=200x200`} alt="robo"/>
		<div>
		<h1>{props.name}</h1>
		<p>{props.email}</p>
		</div>
		</div>
		);
}
export default Card;