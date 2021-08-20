const generateHTML = team => {
	return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        .background {
            height: 100px;
            background: linear-gradient(315deg, hsla(239, 94%, 19%, 1) 0%, hsla(214, 97%, 27%, 1) 12.5%, hsla(201, 100%, 36%, 1) 25%, hsla(195, 100%, 39%, 1) 37.5%, hsla(190, 100%, 42%, 1) 50%, hsla(190, 74%, 59%, 1) 62.5%, hsla(189, 75%, 75%, 1) 75%, hsla(190, 76%, 82%, 1) 87.5%, hsla(190, 77%, 88%, 1) 100%);
            background: -webkit-linear-gradient(315deg, hsla(239, 94%, 19%, 1) 0%, hsla(214, 97%, 27%, 1) 12.5%, hsla(201, 100%, 36%, 1) 25%, hsla(195, 100%, 39%, 1) 37.5%, hsla(190, 100%, 42%, 1) 50%, hsla(190, 74%, 59%, 1) 62.5%, hsla(189, 75%, 75%, 1) 75%, hsla(190, 76%, 82%, 1) 87.5%, hsla(190, 77%, 88%, 1) 100%);
        }

        .card {
            background-color: #ade8f4;
        }

        .card-header {
            background-color: #00B4D8;
            font-weight: bold;
            color: #03045E;
        }

        h1 {
            text-align: center;
            padding: 25px 0;
            color: #03045E;
        }

        i {
            padding-right: 5px;
        }

        p {
            margin: 0;
        }
    </style>
</head>

<body>
    <div class="background">
        <h1>${team.name}</h1>
    </div>

    <div class="container">
        <div class="row row-cols-auto d-flex justify-content-evenly">
            ${team.generateCards()}
        </div>
    </div>
</body>

</html>`;
};

exports.generateHTML = generateHTML;
