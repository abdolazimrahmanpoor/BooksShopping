<template>
  <div>
    <div class="level">
      <div class="level-left">
        <h1 class="subttitle is-5">
          <span class="has-text-grey-light"> خوش آمدید </span
          ><strong> عبدالعظیم رحمان پور </strong>
        </h1>
      </div>
      <div class="level-right">
        <div class="select">
          <select @change="changeStatus">
            <option value="today" selected>امروز</option>
            <option value="yesterday">دیروز</option>
            <option value="week">این هفته</option>
            <option value="mounth">این ماه</option>
            <option value="year">امسال</option>
            <option value="alltime  ">همه وقت</option>
          </select>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-link has-text-right">
          <p class="title is-3">232</p>
          <p class="subtitle is-5">سفارش ها</p>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-info has-text-right">
          <p class="title is-3">7,600,000</p>
          <p class="subtitle is-5">درآمد به تومان</p>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-primary has-text-right">
          <p class="title is-3">1,678</p>
          <p class="subtitle is-5">کتاب ها</p>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-success has-text-right">
          <p class="title is-3">20,756</p>
          <p class="subtitle is-5">بازدیدکنندگان</p>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-4-fullhd" dir="rtl">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">آخرین سفارش ها</h2>
            <template v-for="order in orders">
            <div class="level" :key="order.id">
              <div class="level-left">
                <div class="has-text-right">
                  <p class="title is-5 is-marginless">{{ order.price }} تومان</p>
                  <span class="tag" :class="order.status.class">{{ order.status.label }}</span>
                </div>
              </div>
              <div class="level-right">
                <div>
                  <p class="title is-5 is-marginless">
                    <router-link to="/edit-order">{{ order.id }}</router-link>
                  </p>
                  <small>
                    {{ order.date }} توسط
                    <router-link to="/edit-customer">{{ order.purchasedBy }}</router-link>
                  </small>
                </div>
              </div>
            </div>
            </template>

            <router-link href="orders.html" class="button is-link is-outlined"
              >نمایش همه سفارشات</router-link>
            
          </div>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-4-fullhd" dir="rtl">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">محبوب ترین کتاب ها</h2>

            <template v-for="(book, key) in books">
            <div class="media" :key="book.id">
              <div class="media-left is-marginless">
                <p class="number">{{ key +1 }}</p>
              </div>
              <div class="media-right">
                <img v-bind:src="book.image" alt="picture" width="60" />
              </div>
              <div class="media-content">
                <p class="title is-5 is-marginless">
                  <router-link to="/edit-book">{{ book.name }}</router-link>
                </p>
              </div>
              <div class="media-right">{{ book.copiesSold }} فروش</div>
            </div>
            </template>

           

            <router-link to="/orders" class="button is-link is-outlined">نمایش همه کتاب ها</router-link>         
          </div>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-4-fullhd" dir="rtl">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">بهترین مشتریان</h2>
              <template v-for="(customer, key) in customers">
            <div class="media" :key="customer.id">
              <div class="media-left is-marginless">
                <p class="number">{{ key +1 }}</p>
              </div>
              <div class="media-content">
                <p class="title is-5 is-spaced is-marginless">
                  <router-link to="/edit-customer">{{ customer.name }}</router-link>
                </p>
                <p class="subtitle is-6">{{ customer.city }}</p>
              </div>
              <div class="media-right">{{ customer.orderCount }} سفارش</div>
            </div>
            </template>

          

            <router-link to="/customers" class="button is-link is-outlined"
              >نمایش همه مشتریان</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: { },
  data(){
    return {
      customers: [
        {
          id: 1,
          name: "حسن مهدوی",
          city:  "اصفهان",
          orderCount: 7
        },
          {
          id: 2,
          name: "احمدنور رحمانی",
          city:  "تهران",
          orderCount: 5
        },
          {
          id: 3,
          name: "مسلم کاملی",
          city:  "بندرعباس",
          orderCount: 2
        }
      ],
      books: [
        {
          id: 1,
          name: "کتاب راز",
          copiesSold:  146,
          image: "/images/raz.jpg"
        },
         {
          id: 2,
          name: "ملت عشق",
          copiesSold:  165,
          image: "/images/mellat.jpg"
        }
      ],
      orders: [
        {
          id: 787352,
          date: "25/07/1399, 17:23",
          purchasedBy: "حسین احمدی",
          price: "56.000",
          status: {
            label: "در حال پردازش",
            class: "is-warning"
          }
        },
        {
          id: 787350,
          date: "16/06/1399, 11:45",
          purchasedBy: "محمد کمالی",
          price: "33.000",
          status: {
            label: "با موفقیت",
            class: "is-success"
          }
        },
         {
          id: 918478,
          date: "08/06/1399, 22:54",
          purchasedBy: "محمد طالب پور",
          price: "27.000",
          status: {
            label: "خطا",
            class: "is-danger"
          }
        }
      ],
    }
  }
};
</script>

<style>
</style>