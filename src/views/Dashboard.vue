<template>
  <div>
    <!-- navbar start -->
    <nav class="navbar has-shadow is-light">
      <div class="navbar-brand">
        <a href="" class="navbar-item">
          <img src="images/logo.png" alt="logo" />
        </a>
        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <small>سیستم مدیریت فروش کتاب</small>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">a_rahmanpoor</div>
            <div class="navbar-dropdown">
              <a href="#" class="navbar-item">
                <div>
                  <span>پروفایل</span>
                  <span class="icon is-small">
                    <i class="fa fa-user-circle"></i>
                  </span>
                </div>
              </a>

              <a href="#" class="navbar-item">
                <div>
                  <span>گزارشات</span>
                  <span class="icon is-small">
                    <i class="fa fa-bug"></i>
                  </span>
                </div>
              </a>

              <a href="#" class="navbar-item">
                <div>
                  <span>خروج</span>
                  <span class="icon is-small">
                    <i class="fa fa-sign-out-alt"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- navbar end -->

    <Section class="section" dir="ltr">
      <div class="columns">
        <!-- main menu start -->
        <div class="column is-4-tablet is-3-desktop is-2-widescreen">
          <nav class="menu" dir="rtl">
            <p class="menu-label">منوی اصلی</p>
            <ul class="menu-list">
              <li>
                <a href="dashbord.html" class="is-active">
                  <span class="icon">
                    <i class="fas fa-digital-tachograph"></i>
                  </span>
                  داشبورد
                </a>
              </li>

              <li>
                <a href="books.html">
                  <span class="icon">
                    <i class="fas fa-book"></i>
                  </span>
                  کتاب ها
                </a>
              </li>

              <li>
                <a href="customers.html">
                  <span class="icon">
                    <i class="fas fa-address-book"></i>
                  </span>
                  مشتری ها
                </a>
              </li>

              <li>
                <a href="orders.html">
                  <span class="icon">
                    <i class="fas fa-file-alt"></i>
                  </span>
                  سفارشات
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- main menu end -->

        <div class="column" dir="">
          <div class="level">
            <div class="level-left">
              <h1 class="subttitle is-5">
                <span class="has-text-grey-light"> خوش آمدید </span
                ><strong> علی حاتمی </strong>
              </h1>
            </div>
            <div class="level-right">
              <div class="select">
                <select>
                  <option>امروز</option>
                  <option>دیروز</option>
                  <option>این هفته</option>
                  <option selected>این ماه</option>
                  <option>امسال</option>
                  <option>همه وقت</option>
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
                  <div class="level">
                    <div class="level-left">
                      <div class="has-text-right">
                        <p class="title is-5 is-marginless">56,000 تومان</p>
                        <span class="tag is-warning">در حال پردازش</span>
                      </div>
                    </div>
                    <div class="level-right">
                      <div>
                        <p class="title is-5 is-marginless">
                          <a href="edit-order.html">787352</a>
                        </p>
                        <small>
                          25/07/1399, 17:23 توسط
                          <a href="edit-customer.html">علی ابراهیمی</a>
                        </small>
                      </div>
                    </div>
                  </div>

                  <div class="level">
                    <div class="level-left">
                      <div class="has-text-right">
                        <p class="title is-5 is-marginless">33,000 تومان</p>
                        <span class="tag is-success">با موفقیت</span>
                      </div>
                    </div>
                    <div class="level-right">
                      <div>
                        <p class="title is-5 is-marginless">
                          <a href="edit-order.html">787534</a>
                        </p>
                        <small>
                          14/07/1399, 12:34 توسط
                          <a href="edit-customer.html">حسین احمدی</a>
                        </small>
                      </div>
                    </div>
                  </div>
                  <a href="orders.html" class="button is-link is-outlined"
                    >نمایش همه سفارشات</a
                  >
                </div>
              </div>
            </div>

            <div class="column is-12-tablet is-6-desktop is-4-fullhd" dir="rtl">
              <div class="card">
                <div class="card-content">
                  <h2 class="title is-4">محبوب ترین کتاب ها</h2>

                  <div class="media">
                    <div class="media-left is-marginless">
                      <p class="number">1</p>
                    </div>
                    <div class="media-right">
                      <img src="images/raz.jpg" width="60" />
                    </div>
                    <div class="media-content">
                      <p class="title is-5 is-marginless">
                        <a href="edit-book.html">کتاب راز</a>
                      </p>
                    </div>
                    <div class="media-right">146 فروش</div>
                  </div>

                  <div class="media">
                    <div class="media-left is-marginless">
                      <p class="number">2</p>
                    </div>
                    <div class="media-right">
                      <img src="images/mellat.jpg" width="60" />
                    </div>
                    <div class="media-content">
                      <p class="title is-5 is-spaced is-marginless">
                        <a href="edit-book.html"> ملت عشق</a>
                      </p>
                    </div>
                    <div class="media-right">144 فروش</div>
                  </div>

                  <a href="orders.html" class="button is-link is-outlined"
                    >نمایش همه کتاب ها</a
                  >
                </div>
              </div>
            </div>

            <div class="column is-12-tablet is-6-desktop is-4-fullhd" dir="rtl">
              <div class="card">
                <div class="card-content">
                  <h2 class="title is-4">بهترین مشتریان</h2>

                  <div class="media">
                    <div class="media-left is-marginless">
                      <p class="number">1</p>
                    </div>
                    <div class="media-content">
                      <p class="title is-5 is-spaced is-marginless">
                        <a href="edit-customer.html">حسین احمدی</a>
                      </p>
                      <p class="subtitle is-6">تهران</p>
                    </div>
                    <div class="media-right">9 سفارش</div>
                  </div>

                  <div class="media">
                    <div class="media-left is-marginless">
                      <p class="number">2</p>
                    </div>
                    <div class="media-content">
                      <p class="title is-5 is-spaced is-marginless">
                        <a href="edit-customer.html">ابراهیم رحمانی</a>
                      </p>
                      <p class="subtitle is-6">اصفهان</p>
                    </div>
                    <div class="media-right">7 سفارش</div>
                  </div>

                  <a href="orders.html" class="button is-link is-outlined"
                    >نمایش همه مشتریان</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>