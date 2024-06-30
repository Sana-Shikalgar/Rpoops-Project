async function getMenu() {
  try {
    let buff = await fetch("http://localhost:3005/menu");
    if (buff.ok) {
      let data1 = await buff.json();

      let dinner = data1[0].dinner;
      if (dinner != null) {
        dinner.push("dinner");
      }
      let lunch = data1[0].lunch;
      lunch.push("lunch");

      let breakfast = data1[0].breakfast;
      breakfast.push("breakfast");

      let snack = data1[0].snack;
      snack.push("snack");

      let arr = [];
      arr.push(breakfast);
      arr.push(lunch);
      arr.push(snack);
      arr.push(dinner);

      console.log(arr);

      let cardsUser = document.querySelector(".cards");
      for (let i = 0; i < arr.length; i++) {
        let usercontent = `<article class="plan [ card ]">
          <div class="inner">
            <span class="pricing">
              <ion-icon name="restaurant-outline"></ion-icon>
            </span>
            <h2 class="title"><b> ${arr[i][5]}</b></h2>

            <ul class="features">
           
              <li>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>${arr[i][0]}</span>
              </li>
               <li>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>${arr[i][1]}</span>
              </li>
               <li>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>${arr[i][2]}</span>
              </li>
               <li>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>${arr[i][3]}</span>
              </li>
               <li>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>${arr[i][4]}</span>
              </li>
            </ul>
            
          </div>
        </article>`;
        cardsUser.innerHTML += usercontent;
      }

      //   do something with the response data
    } else {
      console.log("Error: " + buff.statusText);
    }
  } catch (error) {
    alert(error);
  }
}
getMenu();
