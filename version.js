const url = 'https://api.kxz.atcumt/admin/version?version=0.9.1.2'

function latestAndroid() {
    fetch(url)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

}

function setAndroidUrl(url) {
    const a = document.getElementById('android-url')
    a.href = url
}

latestAndroid()