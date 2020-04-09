module.exports = {
    date: (datetimeString) => `${new Date(datetimeString).getDate()}/${new Date(datetimeString).getUTCMonth() + 1}/${new Date(datetimeString).getFullYear()}`
}