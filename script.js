const empData = newData (),

      container = document.getElementById ( `accordion` );

empData.forEach ( ( result ) => {
  // Create card element
  const card = document.createElement ( `div` );

  card.classList = `card-body`;

  //  Card content
  const content = `
  <div class="card col-3">
											<div class="mt-3">
												<img src="${ result.image }" class="float-left m-2"/>
												<div class="mt-3 container-fluid">
													<h4 class="m-0 font-weight-bold">${ result.First_Name }</h4>
													<p class="m-0">${ result.department }</p>
												</div>
											</div>
											<div class="card-body">
												<p class="card-text para">
													${ result.text }
												</p>
											</div>
	</div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
} );