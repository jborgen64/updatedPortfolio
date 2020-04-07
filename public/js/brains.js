$(".contactBtn").on("click", function(){
    $(".aboutHolder").hide(500);
    $(".portfolio").hide(500);
    $(".contact").show(500);
});

$(".aboutBtn").on("click", function(){
    $(".contact").hide(500);
    $(".portfolio").hide(500);
    $(".aboutHolder").show(500);
});

$(".portBtn").on("click", function(){
    $(".contact").hide(500);
    $(".aboutHolder").hide(500);
    $(".portfolio").show(500);


    $(".portfolio").empty();
    $.get("/api/").then(function(response) {
      console.log("I tried to get");
      console.log(response);


    for (var i = 0; i < response.length; i++) {
        console.log(response[i]);

        var displayPort = `
         <div class="row issueCard">
           <div class="col s12 m7">
            <div class="card">
               <div class="card-image">
                 <img src="${response[i].image}">
               </div>
               <div class="card-content">
                 <p><a href="${response[i].deployed}">app name</p>
               </div>
               <div class="card-action">
              </div>
            </div>
           </div>
        </div>`;

        $(".portfolio").append(displayPort);
    };

    });
});

//       var savedArray = response.savingArray;
//       let issueArr = [];

//       for (var i = 0; i < savedArray.length; i++) {
//         //object housing info from our get request
//         var issue = {
//           title: savedArray[i].title,
//           cover: savedArray[i].urlPic,
//           issueNum: savedArray[i].issueNum
//         };

//         //pushing issues into empty array
//         issueArr.push(issue);

//         console.log(issueArr);
//         console.log(issueArr.length);
//         //creating a card to display comic issue content in
        
//         var displayIssue = `
//         <div class="row issueCard">
//           <div class="col s12 m7">
//             <div class="card">
//               <div class="card-image">
//                 <img src="${issueArr[i].cover}">
//               </div>
//               <div class="card-content">
//                 <p>${issueArr[i].title}, issue: ${issueArr[i].issuenum}</p>
//               </div>
//               <div class="card-action">
//                 <button class="savecomic">save</button>
//               </div>
//             </div>
//           </div>
//         </div>`;

//         $(".issueDisplay").append(displayIssue);
//       }
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// });


// });

