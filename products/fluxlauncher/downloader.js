function download(file, fileName) {
    fetch(file)
        .then(resp => resp.status === 200 ? resp.blob() : Promise.reject('Something went wrong :,('))
        .then(blob => {
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('Something went wrong while downloading :,('));
}