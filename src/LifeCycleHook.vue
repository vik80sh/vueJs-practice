<template >
  <div class="lifecyle-wrapper">
    <h2>{{title}}</h2>
    <button @click="updateTitle">Update Title</button>
    <h3>Some Data fetch through API</h3>
    <input type="text" v-model="subTitle" class="search-box" />
    <div v-for="post in fiterBasedOnTitle" :key="post.id" class="posts-wrapper">
      <h4 class="post">{{post.title}}</h4>
      <div class="body">{{post.body | snippet}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LifeCycle",
  data() {
    return {
      title: "Life Cycle of Vue",
      posts: [],
      subTitle: ""
    };
  },
  methods: {
    updateTitle() {
      this.title = "Ohh Title Updated : Life Cycle of Vue ";
    }
  },
  beforeCreate() {
    console.log(
      "it will load even before look craete ,  Use alert for better under standing"
    );
  },
  created() {
    console.log("Hook Created , Use alert for better under standing");
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(res => {
        this.posts = res.data;
      })
      .catch(err => {
        let error = [{ litle: "Error", boby: "We got some error in API" }];
        this.posts = error;
        console.log(posts, "Ohh!  Error ", err);
      });
  },
  beforeUpdate() {
    console.log("It will run before updating anything");
  },
  computed: {
    fiterBasedOnTitle() {
      console.log("hello ", this.subTitle);
      return this.posts.filter(post => post.title.match(this.subTitle));
    }
  }
};
</script>
<style lang="scss" scoped>
    .lifecyle-wrapper{
        .posts-wrapper{
            padding: 0 30px;
            .post{
                margin: 0 auto;
            }
            .body{
                padding-left: 20px;
                margin-bottom: 20px;
            }
        }
        .search-box{
            width: 40%;
            height: 30px;
            padding-left: 10px;
            border: 2px solid;
            border-radius: 10px;
            margin-bottom: 20px;
        }
    }
</style>