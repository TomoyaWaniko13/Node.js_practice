import express from "express";

const PORT = 10000;
const app = express();

//サーバー側でJSONを受け取るためにこの行が必要
app.use(express.json());

app.get('/', function (req, res) {
    res.send(`
            <form action="/result" method="POST">
                <input type="text" name="title">
                <input type="text" name="description">
                <<input type="submit">
            </form>
            <script>
                const formEl = document.querySelector('form');
                formEl.onsubmit = function(event) {
                  event.preventDefault();
                  const title = formEl[0].value;
                  const description = formEl[1].value;
                  
                  fetch('/result',{
                      method: 'POST',
                      
                      headers: {
                          'content-type': 'application/json'
                      },
                      
                      body: JSON.stringify({
                        title: title,
                        description: description
                      }).then(async function(res){
                         const data = await res.json();
                         console.log(data);
                      })
                  });
                }
                
            </script>
            `);
});

app.post('/result', function (req, res) {
    const params = req.body;
    console.log(params);
    res.json({msg: 'success'});
});

app.listen(PORT, function () {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// import express from "express";
//
// const PORT = 10000;
// const app = express();
//
// app.use(express.json());
//
// app.get('/', function (req, res) {
//     res.send(`
//     <form action="/result" method="POST">
//       <input type="text" name="title">
//       <input type="text" name="description">
//       <input type="submit">
//     </form>
//     <script>
//       const formEl = document.querySelector('form');
//       formEl.onsubmit = function(event) {
//         event.preventDefault();
//         const title = formEl[0].value;
//         const description = formEl[1].value;
//         fetch('/result', {
//           method: 'POST',
//           headers: {
//             'content-type': 'application/json'
//           },
//           body: JSON.stringify({
//             title: title,
//             description: description
//           })
//         })
//       }
//     </script>
//     `);
// });
//
// app.post('/result', function (req, res) {
//     const params = req.body;
//     console.log(params);
// });
//
//
// app.listen(PORT, function () {
//     console.log(`Server is running at: http://localhost:${PORT}`);
// });