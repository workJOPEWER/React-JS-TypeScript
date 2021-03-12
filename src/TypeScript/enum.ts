//вспомогательная сущность ктр позволяет лучше
// структурировать код при однотипных элементах


enum Membership {
    Simple, //0
    Standard, //1
    Premium  //2
}

const membership = Membership.Standard
const membershipReverse = Membership[2] //по ключу

console.log(membership)
console.log(membershipReverse)


//получаем внятные значения
enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)