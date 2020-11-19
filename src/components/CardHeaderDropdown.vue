<template>
    <div>
        <div class="dropdown is-right"
            :class="{'is-hoverable' : isHoverale, 'is-active': isActive}" @click="openDropdown">
            <div class="dropdown-trigger">
                <button class="button is-small" aria-haspopup="true"
                aria-controls="dropdown-menu">
                <span class="icon is-small">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a class="dropdown-item">ویرایش</a>
                    <a class="dropdown-item">کپی</a>
                    <a class="dropdown-item">حذف</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'card-header-dropdown',
        props: {
            isHoverable: Boolean,
            default: false
        },
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            openDropdown(){
                if (!this.isHoverable) {
                    this.isActive = !this.isActive;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>