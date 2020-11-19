<template>
  <div id="app">
    <!-- navbar start -->
    <nav
      class="navbar has-shadow is-light"
      dir="ltr"
      v-if="$route.name !== 'Login'"
    >
      <div class="navbar-brand">
        <a href="" class="navbar-item">
          <img src="@/assets/images/logo.png" alt="logo" />
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
            <div class="navbar-link">{{ $route.params.username}}</div>
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

    <section class="section" dir="ltr" v-if="$route.name !== 'Login'">
      <div class="columns">
        <!-- main menu start -->
        <div class="column is-4-tablet is-3-desktop is-2-widescreen">
          <aside class="menu" dir="rtl">
            <p class="menu-label">منوی اصلی</p>
            <ul class="menu-list">
              <li>
                <router-link :to="{ name: 'Dashboard', params: {username: 'azim.cycletourist'}}">
                  <span class="icon">
                    <i class="fas fa-digital-tachograph"></i>
                  </span>
                  داشبورد
                </router-link>
              </li>

              <li>
                <router-link to="/books">
                  <span class="icon">
                    <i class="fas fa-book"></i>
                  </span>
                  کتاب ها
                </router-link>
              </li>

              <li>
                <router-link to="/customers">
                  <span class="icon">
                    <i class="fas fa-address-book"></i>
                  </span>
                  مشتری ها
                </router-link>
              </li>

              <li>
                <router-link to="/orders">
                  <span class="icon">
                    <i class="fas fa-file-alt"></i>
                  </span>
                  سفارشات
                </router-link>
              </li>
            </ul>
          </aside>
        </div>
        <!-- main menu end -->
        <main class="column">
          <transition> <router-view /> </transition>
        </main>
      </div>
    </section>
    <div v-else><router-view /></div>
    <transition
      ><bug-report
        :showModal="openBugReport"
        v-on:close="openBugReport = false"
      ></bug-report
    ></transition>
  </div>
</template>



<script>
export default {
  
}
</script>




<style lang="scss">


.is-rounded img{
  border-radius: 300000px;
}

figure {
  margin-right: 0.5rem;
}

.is-leveled {
  justify-content: space-between;
}
</style>
