type Followings = {
  followers: number[];
  followings: number[];
};

class Twitter {
  private userTweets = new Map<number, { tweetId: number; time: number }[]>();
  private users = new Map<number, Followings>();
  private time = 0;

  postTweet(userId: number, tweetId: number): void {
    const arr = this.userTweets.get(userId) ?? [];
    arr.push({ tweetId, time: ++this.time });
    this.userTweets.set(userId, arr);
  }

  getNewsFeed(userId: number): number[] {
    const arr: { tweetId: number; time: number }[] = [];
    arr.push(...(this.userTweets.get(userId) ?? []));

    const user = this.users.get(userId);

    const followings = user?.followings ?? [];
    for (const fid of followings) {
      arr.push(...(this.userTweets.get(fid) ?? []));
    }

    return arr
      .sort((a, b) => b.time - a.time)
      .slice(0, 10)
      .map((t) => t.tweetId);
  }

  follow(followerId: number, followeeId: number): void {
    if (followerId === followeeId) {
      return;
    }

    const followee = this.users.get(followeeId) ?? {
      followers: [],
      followings: [],
    };

    if (!followee.followers.includes(followerId)) {
      followee.followers.push(followerId);
    }

    this.users.set(followeeId, followee);

    const follower = this.users.get(followerId) ?? {
      followers: [],
      followings: [],
    };

    if (!follower.followings.includes(followeeId)) {
      follower.followings.push(followeeId);
    }

    this.users.set(followerId, follower);
  }

  unfollow(followerId: number, followeeId: number): void {
    if (followerId === followeeId) {
      return;
    }

    const followee = this.users.get(followeeId);
    if (followee) {
      followee.followers = followee.followers.filter((id) => id !== followerId);
    }

    const follower = this.users.get(followerId);
    if (!follower) {
      return;
    }

    follower.followings = follower.followings.filter((id) => id !== followeeId);
  }
}
