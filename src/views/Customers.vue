<template>
  <div>
    <div class="column" dir="rtl">
      <h1 class="title">مشتری ها</h1>
      <!-- Toolbar Start -->
      <nav class="level" dir="ltr">
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle">تعداد <strong> {{ customers.length }} </strong></p>
          </div>

          <p class="level-item">
            <a href="new-customer.html" class="button is-success">جدید</a>
          </p>

          <div class="level-item is-hidden-tablet-only">
            <div class="field has-addons">
              <p class="control">
                <input type="text" class="input" placeholder="نام ، ایمیل" />
              </p>
              <p class="control">
                <button class="button">جستجو</button>
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
            <th class="is-narrow">
              <input type="checkbox" />
            </th>
            <th>نام و نام خانوادگی</th>
            <th>ایمیل</th>
            <th>شهر</th>
            <th>سفارشات</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th class="is-narrow">
              <input type="checkbox" />
            </th>
            <th>نام و نام خانوادگی</th>
            <th>ایمیل</th>
            <th>شهر</th>
            <th>سفارشات</th>
            <th>عملیات</th>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <router-link to="/edit-customer">
                <strong>{{ customer.name }}</strong>
              </router-link>
            </td>
            <td>
              <code>{{ customer.email }}</code>
            </td>
            <td>{{ customer.city }}</td>
            <td>
              <router-link to="/customer-orders">{{
                customer.orderCount
              }}</router-link>
            </td>
            <td>
              <div class="buttons">
                <a class="button is-small is-danger">حذف</a>
                <router-link class="button is-small is-warning" to="/edit-customer">ویرایش</router-link>
                
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- pagination start -->
      <nav class="pagination" dir="ltr">
        <a class="pagination-previous">قبلی</a>
        <a class="pagination-next">صفحه بعدی</a>
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
      customers: [
          {
          id: 1,
          name: "حسن مهدوی",
          email: "h_mahdavi@gmail.com",
          city:  "اصفهان",
          orderCount: 7
        },
          {
          id: 2,
          name: "احمدنور رحمانی",
          email: "a_rahmani@gmail.com",
          city:  "تهران",
          orderCount: 5
        },
          {
          id: 3,
          name: "مسلم کاملی",
          email: "m_kameli@gmail.com",
          city:  "بندرعباس",
          orderCount: 2
        }
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
</style>