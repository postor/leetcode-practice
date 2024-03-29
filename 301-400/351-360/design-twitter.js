let tweetSeq = 0, tweetSeqDic = {}
class DoubleLinkedNode {
  constructor(val, prev = null, next = null) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

class User {
  constructor(userId) {
    this.userId = userId
    this.tweets = []
    this.followers = {}
    this.follows = {}

    const begin = new DoubleLinkedNode(0)
    const end = new DoubleLinkedNode(0)
    this.feeds = {
      begin,
      end,
      dic: {}
    }
    begin.next = end
    end.prev = begin
  }

  addTweet(tweetId) {
    tweetSeqDic[tweetId] = tweetSeq++
    this.tweets.unshift(tweetId)
    while (this.tweets.length > 10) {
      let toremove = this.tweets.pop()
      for (let uid in this.followers) {
        this.followers[uid].notifyRemove(toremove)
      }
    }
    this.notifyAdd(tweetId)
    for (let uid in this.followers) {
      this.followers[uid].notifyAdd(tweetId)
    }
  }

  addFollow(user) {
    if (user.followers[this.userId]) return
    user.followers[this.userId] = this
    this.follows[user.userId]
    let t = this.feeds.begin.next
    user.tweets.forEach(tweetId => {
      let node = new DoubleLinkedNode(tweetId)
      this.feeds.dic[tweetId] = node
      while (t != this.feeds.end && tweetSeqDic[t.val] > tweetSeqDic[tweetId]) {
        t = t.next
      }
      let prev = t.prev
      node.prev = prev
      node.next = t
      t.prev = node
      prev.next = node
    })
  }

  removeFollow(user) {
    if (!user.followers[this.userId]) return
    delete this.follows[user.userId]
    delete user.followers[this.userId]
    user.tweets.forEach(tweetId => this.notifyRemove(tweetId))
  }

  getFeeds() {
    let rtn = [], t = this.feeds.begin.next
    while (rtn.length < 10 && t != this.feeds.end) {
      rtn.push(t.val)
      t = t.next
    }
    return rtn
  }

  notifyAdd(tweetId) {
    let prev = this.feeds.begin, next = this.feeds.begin.next
    let node = new DoubleLinkedNode(tweetId, prev, next)
    prev.next = node
    next.prev = node
    this.feeds.dic[tweetId] = node
  }

  notifyRemove(tweetId) {
    let node = this.feeds.dic[tweetId]
    if (!node) {
      console.log(1)
    }
    const { prev, next } = node
    prev.next = next
    next.prev = prev
    delete this.feeds.dic[tweetId]
  }
}
/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.users = {}
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  let user = this.getUser(userId)
  user.addTweet(tweetId)
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let user = this.getUser(userId)
  return user.getFeeds()
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (followeeId == followerId) return
  let user = this.getUser(followerId)
  user.addFollow(this.getUser(followeeId))
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (followeeId == followerId) return
  let user = this.getUser(followerId)
  user.removeFollow(this.getUser(followeeId))
};

Twitter.prototype.getUser = function (userId) {
  if (!this.users[userId]) this.users[userId] = new User(userId)
  return this.users[userId]
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// let twitter = new Twitter();

// // User 1 posts a new tweet (id = 5).
// twitter.postTweet(1, 5);

// // User 1's news feed should return a list with 1 tweet id -> [5].
// console.log(twitter.getNewsFeed(1), [5]);

// // User 1 follows user 2.
// twitter.follow(1, 2);

// // User 2 posts a new tweet (id = 6).
// twitter.postTweet(2, 6);

// // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// // Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// console.log(twitter.getNewsFeed(1), [6, 5]);

// // User 1 unfollows user 2.
// twitter.unfollow(1, 2);

// // User 1's news feed should return a list with 1 tweet id -> [5],
// // since user 1 is no longer following user 2.
// console.log(twitter.getNewsFeed(1), [5]);


let twitter = new Twitter();

const methods = ["Twitter", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "follow", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "follow", "postTweet", "follow", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "follow", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "follow", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "follow", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "unfollow", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "postTweet", "postTweet", "postTweet", "follow", "postTweet", "unfollow", "postTweet", "getNewsFeed", "getNewsFeed", "getNewsFeed", "getNewsFeed", "getNewsFeed", "getNewsFeed", "getNewsFeed", "getNewsFeed", "getNewsFeed", "getNewsFeed"]
const params = [[], [3, 9998], [7, 10], [9, 4395], [1, 1201], [5, 1977], [3, 8997], [9, 3526], [9, 5593], [5, 2318], [1, 2961], [5, 4269], [5, 2441], [2, 594], [1, 2717], [1, 6755], [1, 9059], [7, 4017], [7, 645], [8, 9472], [7, 8607], [5, 403], [4, 1789], [4, 2254], [4, 5008], [8, 6724], [1, 6634], [8, 8552], [9, 3813], [9, 1522], [1, 7601], [1, 3368], [5, 1], [9, 5149], [4, 4368], [5, 9131], [1, 703], [9, 4365], [2, 3], [5, 9729], [5, 4], [7, 7733], [8, 5686], [1, 2108], [9, 2292], [1, 8801], [7, 7672], [7, 8991], [9, 1684], [8, 5], [5, 5858], [5, 7989], [7, 1027], [3, 6949], [3, 9501], [1, 9116], [6, 2], [4, 2816], [7, 5132], [1, 6458], [9, 5835], [7, 9409], [8, 5930], [8, 8111], [4, 8602], [6, 9], [3, 8234], [5, 5627], [8, 22], [3, 3510], [8, 4810], [3, 9742], [10, 4010], [5, 6869], [3, 7768], [4, 6774], [3, 1471], [7, 6123], [1, 5], [2, 6356], [8, 692], [1, 3965], [1, 8290], [9, 3117], [2, 3675], [4, 3], [4, 4033], [2, 2725], [8, 3698], [9, 4326], [3, 5351], [3, 4897], [5, 5549], [9, 10], [8, 8468], [5, 754], [3, 6988], [3, 4360], [8, 8755], [7, 6670], [3, 8910], [7, 6], [7, 6760], [1, 2], [4, 5977], [9, 3087], [3, 5], [7, 8251], [9, 5892], [5, 3214], [3, 9265], [7, 8750], [3, 3089], [1, 9847], [8, 479], [3, 8519], [3, 8960], [8, 5], [2, 7937], [1, 3], [7, 3833], [7, 6], [3, 4340], [7, 3969], [1, 7], [5, 7559], [9, 2369], [3, 8007], [9, 2221], [5, 781], [4, 3659], [2, 3097], [8, 539], [7, 7639], [9, 2928], [1, 4187], [1, 6], [10, 7403], [7, 3851], [7, 8496], [3, 1926], [1, 6203], [1, 4858], [1, 1851], [5, 286], [8, 7446], [9, 462], [9, 5], [9, 4659], [7, 7716], [3, 8], [4, 7450], [5, 2446], [9, 9220], [10, 2597], [3, 1904], [9, 509], [3, 3210], [3, 1737], [5, 7753], [5, 4703], [1, 3865], [4, 3665], [9, 5105], [9, 9955], [8, 1957], [1, 3412], [7, 9823], [3, 1916], [8, 6610], [4, 7397], [1, 3814], [8, 4513], [5, 3236], [3, 4661], [4, 6978], [5, 5320], [7, 9799], [4, 8326], [7, 10], [8, 9786], [3, 2619], [5, 9925], [9, 6691], [4, 1129], [7, 3158], [1, 9812], [3, 7586], [3, 4451], [1, 3286], [9, 6386], [7, 2332], [5, 7724], [3, 2655], [5, 7932], [7, 4627], [2, 4690], [5, 1571], [1, 4547], [7, 1355], [5, 5579], [9, 2650], [4, 2992], [2, 6103], [8, 4980], [4, 6797], [4, 4214], [9, 1], [4, 7496], [9, 369], [9, 772], [2, 3610], [8, 6339], [1, 5107], [3, 1], [5, 7253], [3, 3425], [7, 8312], [1, 9883], [2, 548], [8, 8550], [4, 7139], [4, 5222], [4, 3], [3, 2059], [9, 6747], [7, 9804], [7, 450], [5, 2338], [5, 688], [8, 3953], [10, 8880], [3, 9453], [8, 9530], [5, 2179], [5, 3901], [5, 9643], [1, 864], [7, 4736], [9, 4670], [1, 2], [5, 6004], [2, 7799], [1, 7491], [9, 1496], [9, 3299], [7, 9332], [5, 7659], [3, 2470], [9, 2511], [4, 2], [7, 2666], [4, 6620], [7, 6239], [9, 5271], [2, 4345], [2, 6], [1, 7117], [3, 2624], [4, 1114], [7, 4836], [2, 1998], [3, 9839], [5, 792], [4, 1668], [7, 9455], [10, 7654], [4, 10], [7, 266], [7, 2708], [7, 8], [2, 4246], [5, 1], [9, 6449], [9, 6377], [5, 4909], [6, 1], [1, 4946], [4, 8542], [3, 3680], [9, 3340], [4, 2682], [7, 9802], [3, 306], [5, 3348], [8, 3537], [9, 8], [8, 6272], [4, 1976], [1, 7928], [5, 4827], [1, 4510], [2, 6226], [4, 9659], [9, 4905], [5, 8], [2, 7113], [3, 6523], [9, 701], [4, 823], [9, 3349], [7, 7539], [3, 2], [8, 5387], [4, 8268], [5, 2192], [5, 2488], [5, 5294], [9, 3496], [7, 2799], [1, 868], [5, 1761], [4, 5], [2, 5706], [1, 1642], [1, 1579], [3, 2397], [5, 5725], [4, 4711], [5, 2837], [10, 3975], [9, 5979], [5, 9413], [9, 8252], [7, 3314], [7, 8300], [3, 8932], [1, 8032], [9, 6821], [9, 6643], [7, 928], [2, 5044], [3, 1046], [8, 2058], [2, 8], [4, 1051], [8, 4492], [8, 9326], [8, 3022], [8, 2], [5, 7320], [1, 6837], [5, 7636], [1, 2085], [9, 7], [3, 8184], [4, 1719], [1, 6365], [9, 6834], [4, 4], [1, 3240], [3, 4966], [3, 56], [1, 6], [3, 77], [3, 5898], [5, 1495], [9, 8368], [9, 7650], [7, 6256], [1, 9721], [1, 4537], [2, 7957], [7, 3970], [1, 964], [5, 4473], [7, 5953], [1, 164], [5, 2], [5, 3940], [1, 2010], [5, 5635], [9, 7708], [1, 1801], [3, 4361], [3, 5708], [4, 4099], [8, 1], [3, 6311], [9, 7], [9, 4636], [1, 3116], [5, 5113], [4, 9348], [3, 9164], [8, 4484], [5, 3956], [10, 5243], [7, 4316], [1, 7889], [10, 7817], [9, 5546], [5, 7987], [2, 9738], [4, 4588], [3, 2406], [2, 1321], [5, 4883], [5, 5342], [8, 499], [3, 8039], [2, 8141], [7, 3069], [7, 2887], [8, 5811], [5, 1340], [3, 2023], [1, 5495], [9, 6885], [8, 3730], [9, 2817], [10, 8427], [5, 2], [4, 577], [9, 7587], [6, 8736], [1, 6878], [10, 5], [8, 6887], [7, 910], [5, 7207], [1, 8], [3, 9138], [5, 7], [8, 9886], [8, 8975], [9, 8812], [4, 886], [8, 6504], [10, 4], [1, 8205], [9, 3697], [7, 6371], [5, 8010], [4, 5810], [7, 7362], [2, 5949], [4, 8819], [4, 6], [4, 2841], [8, 3708], [1, 6], [3, 8713], [9, 5449], [9, 9517], [3, 9191], [5, 9619], [7, 5073], [1, 2290], [2, 8482], [6, 9], [5, 6432], [9, 736], [2, 6566], [4, 4658], [8, 420], [3, 9037], [5, 9728], [5, 8661], [3, 9], [5, 9935], [8, 4240], [2, 1965], [1, 4655], [8, 6251], [9, 5927], [8, 9853], [9, 5], [9, 6927], [1, 4577], [10, 639], [5, 817], [7, 7913], [7, 4], [5, 9227], [8, 3201], [9, 4217], [8, 5569], [3, 4729], [10, 7574], [9, 2], [3, 1235], [3, 4622], [7, 5911], [9, 2691], [2, 5191], [1, 1224], [1, 6354], [1, 9154], [7, 526], [8, 4102], [6, 10], [3, 6958], [5, 5208], [9, 8862], [5, 169], [9, 950], [3, 7009], [2, 7013], [7, 649], [5, 223], [8, 3060], [4, 4879], [7, 9838], [4, 5377], [9, 2280], [10, 5486], [5, 1002], [5, 6292], [10, 7], [7, 7628], [4, 9727], [3, 2118], [10, 8780], [5, 945], [5, 3619], [1, 6791], [1, 3772], [5, 7441], [8, 6515], [1, 5375], [3, 5943], [5, 1835], [3, 3894], [1, 6613], [1, 4], [2, 7780], [3, 5737], [10, 8643], [7, 5966], [3, 2710], [7, 7360], [7, 1065], [8, 6651], [8, 2], [2, 4944], [1, 6636], [2, 3706], [7, 6540], [8, 1755], [9, 5367], [6, 8979], [8, 7643], [8, 5623], [9, 9769], [2, 8321], [3, 6719], [4, 915], [7, 6621], [8, 3661], [10, 7550], [8, 2878], [1, 7], [1, 3072], [7, 6048], [5, 4081], [3, 1274], [3, 7], [9, 1972], [7, 3], [7, 7532], [8, 4149], [1, 9870], [2, 6534], [8, 8], [5, 647], [10, 4], [3, 9950], [4, 2084], [1, 5], [3, 3071], [10, 8053], [4, 7204], [7, 7948], [2, 5514], [2, 5867], [3, 9], [8, 2171], [4, 2959], [5, 5616], [1, 8503], [9, 1520], [3, 4044], [1, 7059], [9, 2093], [1, 742], [2, 6749], [7, 9100], [8, 8204], [4, 6630], [1, 5077], [10, 9963], [5, 3215], [4, 9924], [3, 666], [3, 6788], [9, 8063], [1, 8223], [1, 9], [8, 8771], [2, 8475], [3, 316], [2, 4006], [2, 3799], [5, 2030], [4, 2677], [1, 2996], [4, 2742], [2, 1411], [7, 6792], [9, 2661], [9, 6154], [7, 510], [9, 428], [4, 7767], [5, 1531], [9, 5679], [7, 7], [1, 5707], [2, 6], [5, 1296], [3, 7187], [7, 5], [10, 8491], [3, 1418], [2, 381], [3, 3308], [7, 3481], [3, 8553], [8, 7547], [5, 642], [7, 8695], [5, 6930], [5, 3142], [3, 4864], [9, 6229], [4, 2450], [8, 72], [10, 4743], [9, 4618], [8, 8130], [3, 4487], [3, 6767], [1, 6946], [2, 5994], [1, 6055], [7, 6987], [10, 6080], [5, 6139], [5, 949], [7, 1788], [9, 2547], [3, 4], [5, 4296], [4, 5], [4, 8416], [3, 3614], [7, 8685], [9, 9765], [9, 2288], [2, 545], [7, 4091], [8, 2886], [5, 6847], [1, 2734], [1, 7565], [5, 7600], [9, 4344], [9, 700], [3, 3234], [3, 5384], [5, 7], [5, 9916], [8, 8411], [1, 6813], [4, 7], [9, 7853], [1, 9005], [9, 601], [7, 873], [7, 7476], [1, 6417], [7, 1498], [1, 7305], [3, 4004], [7, 3491], [9, 9631], [1, 2607], [3, 7133], [5, 9010], [1, 9379], [5, 4822], [10, 724], [3, 331], [8, 3555], [1, 3099], [9, 9040], [5, 2243], [9, 10], [2, 113], [5, 2698], [9, 5155], [3, 9443], [2, 7930], [6, 7], [10, 9846], [2, 8942], [1, 6060], [1, 9871], [7, 7474], [9, 1], [3, 6743], [4, 4979], [7, 2015], [3, 193], [1, 8], [3, 3720], [2, 9], [7, 3404], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]


const expects = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, []]

for (let i = 1; i < methods.length; i++) {
  const output = twitter[methods[i]](...params[i])
  if (Array.isArray(output)) {
    // if (output.toString() != expects[i].toString()) {
    //   console.log(1)
    // }
  }
}