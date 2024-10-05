<script>
    import PynecraftImage from "./assets/+page/Pynecraft.png"
    import NewSpartanImage from "./assets/+page/NewSpartan.png"
</script>

<style>
    body {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #121212; /* Dark background */
        font-family: Arial, sans-serif;
        color: #e0e0e0; /* Light text color */
    }

    .container {
        width: 100%;
    }

    .container h1 {
        margin-bottom: 5px;
        font-size: 30px;
        text-align: center;
        color: #eaeaea; /* Lighter text for header */
        user-select: none;
    }

    .container p {
        margin-top: 0px;
        font-size: 20px;
        text-align: center;
        color: #eaeaea; /* Lighter text for paragraph */
        user-select: none;
    }

    .button-grid {
        display: grid;
        grid-template-columns: repeat(2, auto); /* Adjust columns to auto-fit */
        gap: 20px;
        justify-content: center; /* Center the grid horizontally */
        align-items: center; /* Center items vertically */
    }

    .button {
        width: 120px;
        height: 120px;
        background-color: #1e1e1e; /* Darker button color */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border:none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        text-decoration: none;
    }

    .button:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2); /* Subtle light shadow */
    }

    .button img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    .button p {
        margin: 0;
        font-size: 14px;
        text-align: center;
        color: #bdbdbd; /* Lighter text for paragraph */
    }
</style>

<body>
    <div class="container">
        <h1>PaologGithub website</h1>
        <div class="button-grid">
            <a class="button" href="/Pynecraft" type="button">
                <img src={PynecraftImage} alt="Pynecraft">
                <p>Pynecraft</p>
            </a>
            <a class="button" href="/NewSpartan" type="button">
                <img src={NewSpartanImage} alt="NewSpartan">
                <p>NewSpartan</p>
            </a>
        </div>
    </div>
</body>
