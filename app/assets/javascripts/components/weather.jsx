class Weather extends React.Component {
	componentDidMount(){
		//console.log(this.props.weather);
		/*Object.keys(this.props.weather).map(function(index){
			//console.log(this.props.weather[index]);
			console.log(i);
		});*/
		//let arr=Object.keys(this.props.weather);
		//console.log(typeof arr);
		this.props.weather.map((weather)=>{
			//console.log(weather.temp);
		});
	}

  render () {
    return (<div className="table-container container">
      <table className="table is-bordered is-striped is-narrow is-fullwidth">
		  <thead>
		    <tr>
		      <th>Date</th>
		      <th>Temp</th>
		    </tr>
		  </thead>
		  <tbody>
		  	  {
		  	  	this.props.weather.map((weather)=>{
					//console.log(weather.id);
					return (
							<tr key={weather.id}>
								<td className="has-text-grey-dark">{weather.date}</td>
								<td className="has-text-grey-dark">{weather.temp}</td>
							</tr>
						);
				})
		  	  }
		  </tbody>

		</table>
    </div>)
  }
}