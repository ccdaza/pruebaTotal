const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
]

Vue.component("myTable", {
    template: '<table>\n' +
        '        <tr>\n' +
        '            <th>Fecha</th>\n' +
        '            <th>Nombre</th>\n' +
        '            <th>Ordenes</th>\n' +
        '            <th>Total</th>\n' +
        '        </tr>\n' +
        '        <template v-for="row in data">\n' +
        '            <tr>\n' +
        '                <td>{{date(row.date)}}</td>\n' +
        '                <td>{{row.name}}</td>\n' +
        '                <td>{{row.quantity}}</td>\n' +
        '                <td>{{numFormat(row.sum_total)}}</td>\n' +
        '            </tr>\n' +
        '        </template>\n' +
        '    </table>',
    props: {
        data: {
            type: Array,
            default(){
                return {}
            }
        }
    },
    methods: {
        date(date){
            const dateObj = new Date(date);
            return months[dateObj.getMonth()] + ", " + dateObj.getDate();
        },
        numFormat(number){
            return "$" + new Intl.NumberFormat().format(number);
        }
    }
})
const app = new Vue({
    el: '#app',
    data: {
        tableData: []
    },
    mounted() {
        axios.get("back")
            .then(response => {
                this.tableData = response.data
            })
            .catch(error => {
                alert("No fue posible carga la informacion, intentelo mas tarde");
            })
    }
});
