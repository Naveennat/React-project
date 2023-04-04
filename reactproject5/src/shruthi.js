import React from 'react'
function RenderingArray() {
	const data = [
		{
			"Name": "Shruthi",
			"Sub": "Maths"
		},
		{
			"Name": "Swetha",
			"Sub": "Tamil"
		},
		{
			"Name": "Naveen",
			"Sub": "Tamil"
		},
		{
			"Name": "Shree",
			"Sub": "Tamil"
		},
		{
			"Name": "Indhu",
			"Sub": "AWS"
		}
	]
	const listItems = data.map(
		(element) => {
			return (
				<ul type="disc">
					<li style={{
						fontWeight: 'bold',
						color: 'red' }}
					>
						{element.Name}
					</li>
					<li>{element.Sub}</li>
				</ul>
			)
		}
	)
	return (
		<div>
			{listItems}
		</div>
	)
}
function Shruthi() {
	return (
		<div className="Apps">
			<div>
				<h1 style={{ color: 'green',
            backgroundColor: 'blue',
            textAlign: 'center' }}>
        Array of Objects
				</h1>
				<h3>Rendering Array</h3>
				<br></br>
				<RenderingArray />
			</div>
		</div>
	);
}

export default Shruthi;
export {RenderingArray};