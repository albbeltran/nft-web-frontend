import styled from "styled-components";

const Container = styled.div`
    justify-content: center;
    margin: 0;
    align-items: center;
    align-content: center;
    margin: 0 auto;

    .carousel-inner {
        .carousel-item {
            .row {
                .col {
                    padding: 0;
                    width: 180px;
                }
            }
        }
    }

    .carousel-control-prev {
        position: fixed;
        margin: auto;
        top: 475px;
        right: 1150px;

        .carousel-control-prev-icon {
            width: 25px;
        }
    }

    .carousel-control-next {
        position: fixed;
        margin: auto;
        top: 475px;
        left: 1150px;
        
        .carousel-control-next-icon {
            width:25px;
        }
    }

`

export { Container };