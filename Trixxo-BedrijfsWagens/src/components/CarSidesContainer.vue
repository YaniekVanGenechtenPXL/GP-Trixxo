<template>
    <div id="carSides">
        <RightSide id="rightside" />
        <FrontSide id="frontside"/>
        <TopSide id="topside" />
        <BackSide id="backside"/>
        <LeftSide id="leftside"/>
    </div>
</template>

<script>
import RightSide from './RightSide.vue';
import FrontSide from './FrontSide.vue';
import TopSide from './TopSide.vue';
import BackSide from './BackSide.vue';
import LeftSide from './LeftSide.vue';

export default {
    components: {
        RightSide,
        FrontSide,
        TopSide,
        BackSide,
        LeftSide
    }
    
}
</script>

<style lang="scss" scoped>
div#carSides {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2.5754fr 1fr;
    grid-template-rows: 3;
    * {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
    #rightside {
        grid-column: 2/3;
        grid-row: 1/2;
        transform: rotate(180deg);
    }
    #frontside {
        grid-column: 1/2;
        grid-row: 2/3;
        transform: rotate(90deg);
    }
    #topside {
        grid-column: 2/3;
        grid-row: 2/3;
    }
    #backside {
        grid-column: 3/4;
        grid-row: 2/3;
        transform: rotate(-90deg);
    }
    #leftside {
        grid-column: 2/3;
        grid-row: 3/4;
    }
}
</style>