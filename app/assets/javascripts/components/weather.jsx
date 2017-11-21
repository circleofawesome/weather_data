class Weather extends React.Component {

  render () {
    return (<div className="table-container container">
      <table className="table is-bordered is-striped is-narrow is-fullwidth">
		  <thead>
		    <tr>
		      <th>Date</th>
		      <th>Temperature</th>
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