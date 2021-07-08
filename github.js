class Github {
    constructor() {
        this.client_id = '266b01faa128149e9cc0';
        this.client_secret = 'a0da4eb8349be49a0084d3dde60d78bb0f05feac';
        this.repos_count = 5;
        this.repos_sort = ' created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}