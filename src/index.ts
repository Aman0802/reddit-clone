import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    // to create a post, but the below line has nothing to do with the databse
    const post = orm.em.create(Post, {title: 'My first Post'})
    
    //to insert into a database
    await orm.em.persistAndFlush(post)
    // console.log('---------------sql 2 ------------------')
    // await orm.em.nativeInsert(Post, {title: 'My first post 2'})

}

main().catch(err => console.error(err));


console.log("Hello there by Aman")