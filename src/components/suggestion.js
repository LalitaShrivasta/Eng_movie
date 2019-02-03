// import React from 'react'

// // import the itemstyle constant which is in the style.js
// import {itemStyle} from './style';

// // function passing the props
// const Suggestions = (props) => {

// // here given every element of an array, in order
// 	const options = props.results.map (result,index => (
// 		<div style={itemStyle} key ={index}>
// 			<a href={`https://www.youtube.com/watch?v=${result.id.videoId}`} target="_blank">
// 				<img src={result.snippet.thumbnails.default.url} alt={"video"} />
// 				<span style={{display: 'block'}}>{result.snippet.title}</span>
// 			</a>
// 		</div> 
// 		))
// 		return <div>{options}</div>
// }

// export default Suggestions;