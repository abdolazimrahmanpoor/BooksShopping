<template>
  <div>
    <div class="column" dir="rtl">
      <h1 class="title">کتاب ها</h1>
      <!-- Toolbar Start -->
      <nav class="level" dir="ltr">
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle">تعداد <strong> {{ books.length }} </strong></p>
          </div>

          <p class="level-item">
            <a href="new-book.html" class="button is-success">جدید</a>
          </p>

          <div class="level-item is-hidden-tablet-only">
            <div class="field has-addons">
              <p class="control">
                <input type="text" class="input" placeholder="نام کتاب, ISBN" />
              </p>
              <p class="control">
                <button class="button">جستجو</button>
              </p>
            </div>
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">سفارشات بر اساس</div>
          <div class="level-item">
            <div class="select">
              <select>
                <option>تاریخ انتشار</option>
                <option>قیمت</option>
                <option>تعداد صفحه</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      <!-- Toolbar End -->
      <!-- Books items start -->
      <div class="columns is-multiline">
        <template v-for="book in books">
          <div
            class="column is-12-tablet is-6-desktop is-4-widescreen"
            :key="book.ISBN"
          >
            <article class="box">
              <div class="media">
                <aside class="media-right">
                  <img :src="getPic(book.coverImage)" width="80" />
                </aside>
                <div class="media-content">
                  <p class="title">
                    <a href="#"> {{ book.title }} </a>
                  </p>
                  <p class="subtitle is-marginless has-text-success">
                    {{ book.price }} تومان
                  </p>
                  <div class="content">
                    {{ book.pageCount }} صفحه
                    <br />
                    ISBN: {{ book.ISBN }}
                    <br />
                    <a href="edit-book.html"> ویرایش </a>
                    <span>.</span>
                    <a href="#"> حذف </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </template>
      </div>
      <!-- Books items End  -->

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
  name: "Books",
  data() {
    return {
      books: [
        {
          title: "اسکندر",
          price: "66.000",
          pageCount: 512,
          ISBN: "978-600-119-939-4",
          coverImage: "eskandar",
        },
        {
          title: "راز ",
          price: "42.000",
          pageCount: 215,
          ISBN: "978-600-5138-52-8",
          coverImage: "raz",
        },
        {
          title: "ملت عشق",
          price: "29.000",
          pageCount: 510,
          ISBN: "978-964-311-919-5",
          coverImage: "mellat",
        },
        {
          title: "اُوِه ",
          price: "38.000",
          pageCount: 392,
          ISBN: "978-600-7141-77-9",
          coverImage: "mardi",
        },
        {
          title: "کتاب کیمیاگر",
          price: "12.500",
          pageCount: 160,
          ISBN: "978-964-172-096-6",
          coverImage: "kimiagar",
        },
        {
          title: "شب‌های روشن",
          price: "7.200",
          pageCount: 126,
          ISBN: "978-964-209-083-9",
          coverImage: "Shab",
        },
      ],
    };
  },
  methods: {
    getPic(bookName) {
      return "./images/" + bookName + ".jpg";
    },
  },
};
</script>

<style>
</style>