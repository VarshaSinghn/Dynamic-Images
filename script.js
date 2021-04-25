// To Display list of doctors......

const docData = newDoctorData (),

      containers = document.getElementById ( `doctor` );

docData.forEach ( ( res ) => {
  // Create card element
  const card = document.createElement ( `div` );

  card.classList = `card-body`;

  //  Card content
  const content = `
  <div class="childDoctor">

									<h5 class="font-weight-bold docHeading mt-2 mb-4">${ res.template }</h5>
									<img src="${ res.image }" alt="" class="rounded mx-auto" />
									<h3 class="mt-3 nameHead">${ res.name }</h3>
									<p class="para1">${ res.degree }</p>
									<p class="para2">${ res.dept }</p>
									<p class="line m-auto"></p>
										<p class="doctorDesc mt-2">
											${ res.statement }
										</p>
									<div>
									<button class="btn btn-primary mt-3 mb-4 knowMore-Btn mt-3">${ res.button }</button>
									</div>


							</div>
  `;

  // Append newyly created card element to the container
  containers.innerHTML += content;
} );

// To Display Warning Sign......

const warnData = warningSign (),

      containerss = document.getElementById ( `warningSign` );

warnData.forEach ( ( ress ) => {
  // Create card element
  const card = document.createElement ( `div` );

  card.classList = `card-body`;

  //  Card content
  const content = `
  <div class="warningSigns col-3 ml-5">
									<img src="${ ress.image }" alt="Card image cap" width="" height="45px" class="ml-4 mt-4" />
									<p class="warningPara mt-2">${ ress.text }</p>
								</div>
  `;

  // Append newyly created card element to the container
  containerss.innerHTML += content;
} );

// To Display bone Narrow......

const boneMarrowData = boneMarrow (),
      warn = document.getElementById ( `boneMarrow` );

console.log ( boneMarrowData.length );

// console.log ( response.boneMarrowData.id );
const arr = boneMarrowData.map ( ( e ) => {
  console.log ( e.id );
} );

boneMarrowData.forEach ( ( warning ) => {
  // Create card element
  const card = document.createElement ( `div` );

  card.classList = `card-body`;

  //  Card content
  const content = `
		<div>

								<p class="ques marrowTransplant" id="bone${ warning.id }">${ warning.question }
								<span class="float-right"><img src="images/invertedTriangle.png" alt="" id="image${ warning.id }" /></span></p>

								<hr>

								<div id="hidePara${ warning.id }">
								<p class="warningPara mt-2 marrowTransplantDesc">${ warning.text }</p>
								</div>
		</div>
  `;

  // Append newyly created card element to the container
  warn.innerHTML += content;
} );
// $ ( `.marrowTransplant` )
//   .click ( () => {
//     $ ( `.marrowTransplantDesc` )
//       .toggle ();
//   } );

$ ( `#boneMarrow` )
  .click ( ( event ) => {
    const boneEvent = event.target.id;

    // console.log ( boneEvent );

    for ( const bone of boneMarrowData ) {
      if ( boneEvent === `bone${ bone.id }` || boneEvent === `image${ bone.id }` ) {
        $ ( `#hidePara${ bone.id }` )
        	.toggle ();

        // $ ( `#image` )
        //   .target ();
        console.log ( `hello` );
      }
    }
  } );

// list of testimonials

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