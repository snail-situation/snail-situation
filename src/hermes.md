# hermes [![Netlify Status](https://api.netlify.com/api/v1/badges/0543950e-fad8-4ba6-a35a-9ccd6c23d62f/deploy-status)](https://app.netlify.com/sites/ssc-hermes/deploys)

<div>
    <img style="width: 15vw" src="/img/hermes_logo.png" alt="Hermes logo"
        title="Hermes logo">
</div>

~~[see the demo website](https://ssc-hermes.netlify.app/)~~

⚠️ note — this is not ready to use yet

## Focus on privacy and sharing data with known people

This project is designed to share images via a social network. It started with using services that are more traditional — a DB and blob host, + UCANs for ID.

In the interest of dogfood though, I've realized that what I'm really looking for is a small scale way to share images with specific people, and I've discovered that [wnfs](https://guide.fission.codes/developers/webnative/file-system-wnfs) already has a way to do read permissions on a per-user basis. It's kind of interesting because it's all based on decryption capabilities instead of access control.

And `wnfs` gives us a common backend / ID-source for users, which makes identity easier, since `webCrypto` private keys cannot be cross-domain.

--------------

> to share private files with a group of people, you would need to write down the list of people in the group. Then call `fs.sharePrivate` and pass it the list of other users.
So `wnfs` I think has everything needed for this usecase. At this point it's more a matter of finding time to try this & build some UI for it.

-----------------

The way I've been thinking about this at a high level is that it's like *Signal*, the messaging app, in the sense that no one is able to read your messages except the recipients, but with an added social network aspect. 

The social part is all configurable too, at a pretty granular level. So you can configure things like -- do you want to let your friends see who your other friends are? Or hide that info from everyone? In any case, you *get to choose* who can read that. Not even the server-operator is able to read that info, unless you allow them to.

This is a big difference from traditional social networks, like *Instagram*, where the server reads/knows all your data.

## relevant links

* [Fission docs -- sharing private data](https://guide.fission.codes/developers/webnative/sharing-private-data)
* [discord talk](https://discord.com/channels/478735028319158273/678353918752718848/996476638697099294)
* [version 1 -- ssc](https://github.com/nichoth/ssc-server)

----

* [This is Fine: Optimism & Emergency in the P2P Network](https://newdesigncongress.org/en/pub/this-is-fine)
 