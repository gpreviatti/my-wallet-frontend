<template>
<div id="Home">
    <NavBar />
    <div class="container">
        <div class="row-md-auto">
            <div class="col-lg-auto">
                <CardAmount />
            </div>
            <div class="col">
                <Purchases />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from "./NavBar";
import Purchases from "./Purchases";
import CardAmount from "./CardAmount";

export default {
    name: "Home",
    components: {
        NavBar,
        Purchases,
        CardAmount
    }
};
</script>
