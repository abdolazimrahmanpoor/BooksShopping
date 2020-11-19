<template>
    <div>
             <div class="column" dir="rtl">

                <h1 class="title">سفارشات</h1>
                <!-- Toolbar Start -->
                <nav class="level" dir="ltr">

                    <div class="level-left">

                        <div class="level-item">
                            <p class="subtitle">
                                تعداد <strong> {{ orders.length }} </strong>
                            </p>
                        </div>

                      

                        <div class="level-item is-hidden-tablet-only">
                            <div class="field has-addons">
                                <p class="control">
                                    <input type="text" class="input" placeholder="مشتری ، شماره سفارش">
                                </p>
                                <p class="control">
                                    <button class="button">
                                        جستجو
                                    </button>
                                </p>
                            </div>
                        </div>

                    </div>

                    <div class="level-right">
                       <p class="level-item"><strong>همه</strong></p>
                       <p class="level-item"><a>با سفارش</a></p>
                       <p class="level-item"><a>بدون سفارش</a></p>
                    </div>
                </nav>
                <!-- Toolbar End -->
                

                <!-- table customer start -->
                <table class="table is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>شماره سفارش</th>
                            <th>نام و نام خانوادگی</th>
                            <th>تاریخ و زمان شفارش</th>
                            <th>تعداد کتاب</th>
                            <th>وضعیت</th>
                            <th class="has-text-right"> قیمت کل (تومان) </th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>شماره سفارش</th>
                            <th>نام و نام خانوادگی</th>
                            <th>تاریخ و زمان شفارش</th>
                            <th>تعداد کتاب</th>
                            <th>وضعیت</th>
                            <th class="has-text-right"> قیمت کل (تومان) </th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr v-for="(order, index) in orders" :key="index">
                            <td>
                               <router-link to="/edit-order"><strong>{{ order.id }}</strong></router-link>
                            </td>
                            <td>
                                <router-link to="/edit-customer">
                                    {{ order.name }}
                                </router-link>
                            </td>
                            <td> {{ order.date }}</td>
                            <td> {{ order.bookCount }}</td>
                            <td>
                               <span class="tag" :class="order.status.class">{{ order.status.label }}</span>
                            </td>
                            <td class="has-text-right">
                               {{ order.price }}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- pagination start -->
                <nav class="pagination" dir="ltr">
                    <a  class="pagination-previous">قبلی</a>
                    <a  class="pagination-next">صفحه بعدی</a>
                    <ul class="pagination-list">
                        <li>
                            <a class="pagination-link">1</a>
                        </li>
                        <li>
                            <span class="pagination-ellipsis">&hellip;</span>
                        </li>
                        <li>
                            <a class="pagination-link">45</a>
                        </li>
                        <li>
                            <a class="pagination-link is-current">46</a>
                        </li>
                        <li>
                            <a class="pagination-link">47</a>
                        </li>
                        <li>
                            <span class="pagination-ellipsis">&hellip;</span>
                        </li>
                        <li>
                            <a class="pagination-link">86</a>
                        </li>
                    </ul>
                </nav>

            </div>
    </div>
</template>

<script>

export default {
  name: 'Customer',
  components: {},
  data(){
    return {
      orders: [
          {
          id: 743364,
          name: "حسن مهدوی",
          date: "99/07/10 - 15:22",
          bookCount:  2,
           status: {
            label: "در حال پردازش",
            class: "is-warning"
          },
          price: "56000"
        },
          {
          id: 654339,
          name: "مسلم کاملی",
          date: "99/06/05 - 22:15",
          bookCount:  1,
            status: {
            label: "با موفقیت",
            class: "is-success"
          },
          price: "25000"
        }
      ],
    }
  }
};
</script>

<style lang="scss" scoped>

</style>