import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const Cardcomponent = robots.map((user,i)=>{
		return (<Card
			key={i}
			id={user.id}
			name={user.employee_name}
			email={user.employee_salary}
			/>
			);
	})
	return (
		<div>
	{Cardcomponent}
   </div>
		);
}

export default CardList;
